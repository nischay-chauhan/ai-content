'use client'
import React from 'react';
import Sidebar from './_components/sidebar';
import Header from './_components/header';
import { SidebarProvider, useSidebar } from '../context/sidebarContext';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <LayoutWithSidebar children={children} />
    </SidebarProvider>
  );
}

function LayoutWithSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:block fixed hidden">
        <Sidebar />
      </div>
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
