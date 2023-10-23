import {Configuration as DevServerConf} from 'webpack-dev-server'
import {BuildConfig} from "./types/build-config";
import path from "path";

export const devServer = ({port, paths}:BuildConfig): DevServerConf => {
    return {
        static: {
            directory: paths.devServerBuild,
        },
        historyApiFallback: true,
        port: port,
        open: true,
        hot: true,
        client: {
            reconnect: true
        }
    }
}