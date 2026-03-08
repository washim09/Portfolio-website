const fs=require('fs'); 
const p='src/components/Sidebar.tsx'; 
let s=fs.readFileSync(p,'utf8'); 
s=s.replace('faTwitter,','faInstagram,'); 
s=s.replace('{ icon: faTwitter, href: \"#\" },','{ icon: faInstagram, href: \"#\" },'); 
fs.writeFileSync(p,s); 
