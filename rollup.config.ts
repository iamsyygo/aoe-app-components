import rollup from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import vue from 'rollup-plugin-vue';
export default rollup.defineConfig({
    input: 'src/main.ts',
    output:{
      format: "es",
      entryFileNames: chunk => `[name].mjs`,
      dir:'packages/es'
    },
    plugins:[
        alias({
            entries: [{
              find: '@/',
              replacement: new URL('./src', import.meta.url).pathname
            }],
            // customResolver
            
          }),
        nodeResolve(),
        typescript({
            // tsconfig: './tsconfig.json',
            check: false 
        }),
        vue(),
      ]
})