/* Dados de perfil que aparecem em mais de um lugar do site.
   Centralizados para que trocar um valor atualize PT e EN de uma vez —
   antes o e-mail vivia duplicado no dicionário e divergia entre os
   idiomas (ola@nome.com.br em PT, hello@name.com em EN).

   TODO — ainda são exemplo, não levam a lugar nenhum:
     · email
     · scholarProfiles (apontam para a home de cada serviço, não
       para os perfis)
     · github, twitter e lattes em src/lib/social.ts (href: null)

   O domínio example.com é reservado pela RFC 2606 justamente para
   este uso: é garantido que não pertence a ninguém. */

export const email = 'ola@example.com';

export const scholarProfiles = [
  { label: 'Lattes', href: 'https://lattes.cnpq.br/' },
  { label: 'ORCID', href: 'https://orcid.org/' },
  { label: 'academia.edu', href: 'https://academia.edu/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/' },
];
