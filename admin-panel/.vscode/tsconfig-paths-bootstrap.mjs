import tsConfigPaths from 'tsconfig-paths';
import { register } from 'ts-node';
import { pathToFileURL } from 'node:url';

async function bootstrap() {
  try {
    console.log('tsConfig loaded:', tsConfig);

    const tsConfig = await import('../tsconfig.json', {
      assert: { type: 'json' }
    }).then(module => module.default);

    console.log('tsConfig loaded:', tsConfig);

    tsConfigPaths.register({
      baseUrl: tsConfig.compilerOptions.baseUrl || './',
      paths: tsConfig.compilerOptions.paths || {}
    });

    console.log('Paths registered');

    register({
      transpileOnly: true,
      compilerOptions: {
        module: 'commonjs',
        jsx: 'react'
      },
      skipIgnore: true
    });

    console.log('ts-node registered');
        
    await import('../src/index.tsx');
    console.log('index.tsx imported');
  } catch (error) {
    console.error('Error during bootstrap:', error);
  }
}

bootstrap();
