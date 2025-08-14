import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import iceLogo from './companies/ice_logo.png';
import incubadoraLogo from './companies/incubadora_logo.png';
import marBrasilLogo from './companies/marbrasil_logo.png';
import cnpqLogo from './companies/cnpq.png';
import fundacaoAraucariaLogo from './companies/fundacao_araucaria.png';
import type Companies from '../../layouts/Footer/Companies';

type ContactLink = {
  icon: IconProp;
  linkText: string;
  link: string;
};

type SocialIconLink = {
  icon: IconProp;
  link: string;
};

type Company = {
  logo: string;
  alt: string;
};

export const companies: Company[] = [
  {
    logo: iceLogo,
    alt: 'ICE Logo',
  },
  {
    logo: incubadoraLogo,
    alt: 'Incubadora Logo',
  },
  {
    logo: marBrasilLogo,
    alt: 'Mar Brasil Logo',
  },
];

export const cnpq: Company = {
  logo: cnpqLogo,
  alt: 'CNPQ Logo',
};

export const fundacaoAraucaria: Company = {
  logo: fundacaoAraucariaLogo,
  alt: 'Fundação Araucária Logo',
};

export const socialIconLinks: SocialIconLink[] = [
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/share/168hEW2xJV/',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/incubadora.ifpr/',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/incubadora-ifpr-campus-paranagu%C3%A1/',
  },
];

export const companyName = 'InovaMar - Escritório de Projetos';

export const companyAbout =
  'InovaMar é o Escritório de Projetos em Tecnologia Inovação e Sustentabilidade. Vinculado aos espaços de Inovação do IFPR Paranaguá, conecta ideias a oportunidades, captando recursos por meio de editais e incentivos públicos/privados, apoiando iniciativas sustentáveis alinhadas às demandas da região do Litoral do Paraná.';

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

export const footerBottomText = `© ${new Date().getFullYear()} ${companyName}. Todos os direitos reservados.`;
