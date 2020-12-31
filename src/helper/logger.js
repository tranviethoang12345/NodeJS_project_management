// import { createLogger, format, transports, config } from "winston";
// import appRoot from "app-root-path";

// const { combine, timestamp, json } = format;

// const logger = createLogger({
//   levels: config.syslog.levels,
//   defaultMeta: { component: "user-service" },
//   format: combine(
//     timestamp({
//       format: "YYYY-MM-DD HH:mm:ss",
//     }),
//     json()
//   ),

//   transports: [
//     new transports.Console(),
//     new transports.File({ filename: "combined.log" }),
//   ],
//   exceptionHandlers: [
//     new transports.Console(),
//     new transports.File({ filename: "combined.log" }),
//   ],
// });

// // create a stream object with a 'write' function that will be used by `morgan`
// logger.stream = {
//   write: function (message, encoding) {
//     logger.info(message);
//   },
// };

// export default logger;
