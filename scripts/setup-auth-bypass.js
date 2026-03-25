const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.resolve(__dirname, '../src'));

files.forEach(file => {
  if (file.includes('auth-client.tsx') || file.includes('auth-server.ts')) return;

  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('@clerk/nextjs/server')) {
    content = content.replace(/"@clerk\/nextjs\/server"/g, '"@/lib/auth-server"');
    content = content.replace(/'@clerk\/nextjs\/server'/g, '"@/lib/auth-server"');
    changed = true;
  }
  
  if (content.includes('@clerk/nextjs') && !content.includes('@clerk/nextjs/server') && !content.includes('@/lib/auth-server')) {
    content = content.replace(/"@clerk\/nextjs"/g, '"@/lib/auth-client"');
    content = content.replace(/'@clerk\/nextjs'/g, '"@/lib/auth-client"');
    changed = true;
  }

  // Handle files that import both (though typically rare)
  if (content.includes('@clerk/nextjs') && !content.includes('"@/lib/auth-client"')) {
     content = content.replace(/"@clerk\/nextjs"/g, '"@/lib/auth-client"');
     content = content.replace(/'@clerk\/nextjs'/g, '"@/lib/auth-client"');
     changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated imports in', file);
  }
});
