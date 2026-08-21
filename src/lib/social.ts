/* Fonte única dos links sociais.
   Antes a lista do "Sobre" era só de nomes e TODOS os seis itens
   apontavam para href="#": pareciam links e não iam a lugar nenhum.
   Aqui, o que não tem URL conhecida não vira link — é listado sem
   afordância de clique, em vez de mentir para quem clica.
   Para ativar um item, basta preencher a URL.
   O e-mail e os perfis acadêmicos ficam em src/lib/profile.ts. */
export type Social = { key: string; label: string; href: string | null };

export const socials: Social[] = [
  { key: 'substack', label: 'Substack', href: 'https://kaluanbernardo.substack.com' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaluanbernardo/' },
  { key: 'github', label: 'GitHub', href: null },
  { key: 'twitter', label: 'Twitter', href: null },
  { key: 'lattes', label: 'Lattes', href: null },
];
