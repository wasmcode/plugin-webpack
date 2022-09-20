import {Compiler} from 'webpack'

export class WasmCodePlugin {
    constructor(options = {}) {

    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap(
            'Hello World Plugin',
            (
                stats /* stats is passed as an argument when done hook is tapped.  */
            ) => {
                console.log('Hello World!');
            }
        );
        compiler.resolverFactory.hooks.resolver
            .for('loaders')
            .tap('Hello World Plugin', (resolver) => {
                resolver.hooks.resolve.tap('Hello World Plugin', ())
            })
    }
}
