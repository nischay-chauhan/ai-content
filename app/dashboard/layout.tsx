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
    <div className="h-full bg-white">
      <div className="fixed top-0 z-50 h-full">
        <Sidebar />
      </div>
      <div
        className={`transition-all duration-300 ${isSidebarOpen ? "md:ml-72" : "md:ml-20"
          }`}
      >
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
