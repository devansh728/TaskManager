import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    "@tailwindcss/postcss": {}, // IMPORTANT: Use `tailwindcss()` here, importing from `@tailwindcss/postcss`
    autoprefixer: autoprefixer(),
  },
}
