"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var http = __importStar(require("http"));
var body_parser_1 = __importDefault(require("body-parser"));
var next_1 = __importDefault(require("next"));
var dev = process.env.NODE_ENV !== 'production';
var nextApp = (0, next_1["default"])({ dev: dev });
var nextHandle = nextApp.getRequestHandler();
var port = process.env.PORT || 3000;
nextApp.prepare().then(function () {
    var app = (0, express_1["default"])();
    var server = http.createServer(app);
    var io = new socket_io_1.Server({
        path: '/ws',
        transports: ['websocket', 'polling']
    });
    io.attach(server);
    app.use(body_parser_1["default"].json());
    app.use(body_parser_1["default"].urlencoded({ extended: false }));
    var like = [];
    var vues = 0;
    app.all('*', function (req, res) { return nextHandle(req, res); });
    io.on('connection', function (socket) {
        io.emit('count', like.length);
        io.emit('vue', vues);
        socket.on('like', function (ip) {
            if (!like.includes(ip)) {
                like.push(ip);
            }
            io.emit('count', like.length);
        });
        socket.on('vue', function () {
            vues++;
            io.emit('vue', vues);
        });
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on localhost:".concat(port, " - env ").concat(process.env.NODE_ENV));
    });
})["catch"](function (e) {
    console.error(e);
    process.exit(1);
});
