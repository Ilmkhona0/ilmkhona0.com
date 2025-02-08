import tsConfigPaths from 'tsconfig-paths';
import { register } from 'ts-node';

async function bootstrap() {
  try {
    const tsConfig = await import('../tsconfig.json', {
      assert: { type: 'json' }
    }).then(module => module.default);

    tsConfigPaths.register({
      baseUrl: tsConfig.compilerOptions.baseUrl || './',
      paths: tsConfig.compilerOptions.paths || {}
    });

    register({
      transpileOnly: true,
      compilerOptions: {
        module: 'commonjs',
        jsx: 'react'
      },
      skipIgnore: true
    });

    await import('../src/index.tsx');
  } catch (error) {
    console.error('Error during bootstrap:', error);
  }
}

bootstrap();