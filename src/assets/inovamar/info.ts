import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const companyAbout =
  'InovaMar é o Escritório de Projetos em Tecnologia Inovação e Sustentabilidade. Vinculado aos espaços de Inovação do IFPR Paranaguá, conecta ideias a oportunidades, captando recursos por meio de editais e incentivos públicos/privados, apoiando iniciativas sustentáveis alinhadas às demandas da região do Litoral do Paraná.';

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/168hEW2xJV/',
  instagram: 'https://www.instagram.com/incubadora.ifpr/',
  linkedin:
    'https://www.linkedin.com/in/incubadora-ifpr-campus-paranagu%C3%A1/',
};

type ContactLink = {
  icon: IconProp;
  linkText: string;
  link: string;
};

export const contactLinks: ContactLink[] = [
  {
    icon: faEnvelope,
    linkText: 'incubadora.paranagua@ifpr.edu.br',
    link: 'mailto:incubadora.paranagua@ifpr.edu.br',
  },
  {
    icon: faPhone,
    linkText: '+55 (41) 8833-6497',
    link: 'https://api.whatsapp.com/send/?phone=554188336497&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20o%20Escritório%20de%20Projetos!',
  },
  {
    icon: faLocationDot,
    linkText:
      'Av. Antônio Carlos Rodrigues, 453 - Porto Seguro, Paranaguá - PR, 83215-750',
    link: 'https://maps.app.goo.gl/LKH7PaCVNt2iy9PU6',
  },
];
