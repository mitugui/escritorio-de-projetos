import type { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Default = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Default;
