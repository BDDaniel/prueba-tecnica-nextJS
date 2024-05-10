"use client"

//#region Libs
import { useEffect, useRef } from "react";
//#endregion

//#region Styles
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "/node_modules/primeflex/primeflex.css";
//#endregion

//#region Prime Components
import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { MenuItem } from "primereact/menuitem";
import { BreadCrumb } from 'primereact/breadcrumb';
//#endregion

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const menuRight = useRef<any>(null);
  const toast = useRef(null);
  const items: MenuItem[] = [
    {
      label: 'Ver perfil',
      icon: 'pi pi-user'
    },
    {
      label: 'Aliados',
      icon: 'pi pi-users'
    },
    {
      label: 'PDS',
      icon: 'pi pi-car'
    },
    {
      disabled: true
    },
    {
      id: 'logOut',
      label: 'Cerrar sesión',
      icon: 'pi pi-sign-out'
    }
  ];

  const itemsBreadCrum = [{ label: 'Home' }];

  useEffect(() => {
    if (menuRight.current) {
      menuRight.current = document.getElementById("popup_menu_right");
    }
  }, [])

  const start = (
    <div className="flex align-items-center">
      <i className="ml-4 pi pi-home text-4xl text-blue-500" />
      <label className="ml-3 text-2xl font-semibold text-blue-500">CRM Petromil</label>
      <BreadCrumb model={itemsBreadCrum} className="ml-3 border-none breadcrumb" />
    </div>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Button type="button" label="Consolidado" icon="pi pi-users" outlined severity="secondary" badge="3" badgeClassName="p-badge-danger" />
      <Button icon="pi pi-bell" outlined severity="secondary" aria-label="Notification" badge=" " badgeClassName="p-badge-danger badge-corner-right" />
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menuRight} id="popup_menu_right" className="user-menu" popupAlignment="right" />
      <Button label="Carlota Marquez" icon="pi pi-ellipsis-v" className="mr-2 py-3 my-2 pl-2 user-button" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" className="mr-2" />
    </div>
  );

  return (
    <html lang="es">
      <head>
        <title> Prueba Técnica </title>
      </head>
      <body className="m-0">
        <div>
          <Menubar start={start} end={end} className="p-0" />
        </div>
        {children}
      </body>
    </html>
  );
}
