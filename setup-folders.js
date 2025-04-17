const fs = require('fs');
const path = require('path');

const structure = [
  'src/app/(auth)/login',
  'src/app/(dashboard)',
  'src/app/api/trpc',
  'src/components/layout',
  'src/components/ui',
  'src/lib',
  'src/server',
  'src/types',
  'src/prisma',
  'src/styles',
];

const files = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/(auth)/login/page.tsx',
  'src/app/(dashboard)/page.tsx',
  'src/app/api/trpc/[trpc].ts',
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'src/styles/globals.css',
  'src/types/index.ts',
  'src/lib/utils.ts',
  'src/prisma/schema.prisma',
];

structure.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created folder: ${dir}`);
  }
});

files.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '', 'utf8');
    console.log(`📄 Created file: ${file}`);
  }
});

console.log('✅ 폴더 및 파일 생성 완료!');
