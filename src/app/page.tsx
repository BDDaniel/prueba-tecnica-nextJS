"use client"

//#region Libs
import { useState } from 'react';
//#endregion

//#region Prime Components
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { Dropdown } from 'primereact/dropdown';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';
import { SelectButton } from 'primereact/selectbutton';
import { ToggleButton } from 'primereact/togglebutton';
//#endregion

export default function AppPage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [value, setValue] = useState<any | null>('Por tiempo');
  const [inversion, setInversion] = useState<any | null>(null);
  const [garantias, setGarantias] = useState<any | null>(null);
  const [aprobacion, setAprobacion] = useState<any | null>(null);
  const products = [
    {
      id: '1000',
      title: 'PDS Estación Calle 84',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1001',
      title: 'PDS estación Calle 30',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1002',
      title: 'PDS Estación Brisas del Mar',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1003',
      title: 'PDS Estación Carrera 43',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1004',
      title: 'PDS Estación Torcoroma',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1005',
      title: 'PDS Estación Carrera 38',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1006',
      title: 'PDS Estación Albania Circunvalar',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    },
    {
      id: '1007',
      title: 'PDS Estación Calle 140',
      company: 'Com. Industrial',
      code: 'SC-22-023',
      percentage: 68,
      status: 'A'
    }
  ]

  const percentageBodyTemplate = (product: any) => {
    return <ProgressBar value={product.percentage}></ProgressBar>;
  };

  const actionsBodyTemplate = () => {
    return <Button icon="pi pi-ellipsis-v" text raised severity="secondary" aria-label="actions" />;
  };

  const statusBodyTemplate = (product: any) => {
    return <Tag value={product.status == 'A' ? 'Activo' : 'Inactivo'} severity={getSeverity(product)}></Tag>;
  };

  const getSeverity = (product: any) => {
    switch (product.status) {
      case 'A':
        return 'success';

      case 'I':
        return 'warning';

      default:
        return null;
    }
  };

  const dataTable = () => {
    return (
      <DataTable value={products} selectionMode={'radiobutton'} selection={selectedProduct!} onSelectionChange={(e) => setSelectedProduct(e.value)}
        dataKey="id" tableStyle={{ minWidth: '50rem' }} className='hidden-header' >
        <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
        <Column field='title' className='title-dataTable'></Column>
        <Column field='company'></Column>
        <Column field='code'></Column>
        <Column body={percentageBodyTemplate}></Column>
        <Column body={statusBodyTemplate}></Column>
        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    )
  }

  const header = (
    <img alt="Card" className='border-round-top-2xl' src="https://i.postimg.cc/qBt1QPZ4/screen-barranquilla-map.png" />
  );

  return (
    <main className='flex justify-content-between align-items-center flex-nowrap flex-row background-main'>
      <Card className='flex m-3 flex-wrap max-calc-width shadow-none'>
        <label className='w-full'> Filtrado </label>
        <div className='flex align-items-center mt-2'>
          <Button type="button" label="Filtros" icon="pi pi-filter" outlined severity="secondary" badge="3" />
          <IconField className='ml-2'>
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText placeholder='Buscar' disabled={true} />
          </IconField>
          <Dropdown optionLabel="name" placeholder="Seleccionar" className="w-full md:w-14rem" disabled={true} />
          <label className='ml-3 text-xs'> Limpiar búsqueda </label>
        </div>
        <h2> Zona Atlántico - Magdalena </h2>
        <div className='max-calc-height overflow-auto scrollbar-hidden'>
          <Accordion multiple activeIndex={[0, 1]}>
            <AccordionTab header="Barranquilla">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Santa Marta">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Cartagena">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Riohacha">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Sincelejo">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Montería">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Fundación">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Bosconia">
              {dataTable()}
            </AccordionTab>
            <AccordionTab header="Valledupar">
              {dataTable()}
            </AccordionTab>
          </Accordion>
        </div>
      </Card>
      <div className='flex flex-wrap background-pds'>
        <Card header={header} className='flex m-3 flex-wrap w-full border-pds shadow-none max-calc-height-pds overflow-auto scrollbar-hidden content-nowrap content-column'>
          <div className='flex justify-content-between align-items-center w-full div-pds'>
            <h1 className='m-0'> PDS Estación </h1>
            <Tag value={'Activo'} severity={'success'}></Tag>
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds'>
            <h1 className='m-0'> Calle 84 </h1>
            <Button label="Ver Cartelera" className='bg-blue-600 border-blue-600 shadow-none btn-text-sm' rounded />
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds mt-3 font-light text-xs'>
            <label> Contrato N° </label>
            <label> Consumo traido al corte de </label>
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds'>
            <h4 className='m-0'> SC-22-192 </h4>
            <label className='font-light text-xs'> 30/10/32 </label>
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds border-pds p-2 mt-3 flex-column'>
            <div className='flex justify-content-between align-items-center w-full div-pds border-pds p-3 flex-column'>
              <div className='flex justify-content-between align-items-center w-full div-pds'>
                <label className='font-light'> Progreso de cumplimiento </label>
              </div>
              <div className='flex justify-content-between align-items-center w-full div-pds mt-2'>
                <ProgressBar className='w-full hidden-percentage bg-green' value={value == 'Por tiempo' ? 64 : 82}></ProgressBar>
              </div>
              <div className='flex justify-content-between align-items-center w-full div-pds mt-2'>
                <h3 className='m-0'> {value == 'Por tiempo' ? '64%' : '82%'} </h3>
                <h3 className='font-lighter m-0'> {value == 'Por tiempo' ? '-36%' : '-18%'} </h3>
              </div>
            </div>
            <div className='flex justify-content-between align-items-center w-full div-pds border-pds p-3 mt-2 flex-column'>
              <div className='flex justify-content-between align-items-center w-full div-pds'>
                <label className='font-light'> Progreso de cumplimiento </label>
              </div>
              <div className='flex justify-content-between align-items-center w-full div-pds mt-2'>
                <ProgressBar className='w-full hidden-percentage bg-green' value={value == 'Por tiempo' ? 64 : 82}></ProgressBar>
              </div>
              <div className='flex justify-content-between align-items-center w-full div-pds mt-2'>
                <h3 className='m-0'> {value == 'Por tiempo' ? '64%' : '82%'} </h3>
                <h3 className='font-lighter m-0'> {value == 'Por tiempo' ? '-36%' : '-18%'} </h3>
              </div>
              <div className='flex justify-content-start align-items-center w-full div-pds mt-2'>
                <label className='text-xs font-light mr-2'> {value == 'Por tiempo' ? 'Finalización del contrato' : 'Volumen Consumido'} </label>
                <h4 className='m-0'> {value == 'Por tiempo' ? '01/01/25' : '123.456.789 Gal'} </h4>
              </div>
            </div>
            <div className='flex justify-content-between align-items-center w-full div-pds mt-2'>
              <SelectButton className='w-full' value={value} onChange={(e) => { if (e.value) setValue(e.value) }} options={['Por tiempo', 'Por volumen']} />
            </div>
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds mt-4 font-light text-xs'>
            <ToggleButton onIcon='pi pi-dollar' offIcon='pi pi-dollar' onLabel='Inversión' offLabel='Inversión' checked={inversion} onChange={(e) => { setInversion(e.value); setGarantias(null); setAprobacion(null) }} />
            <ToggleButton onIcon='pi pi-book' offIcon='pi pi-book' onLabel='Garantías' offLabel='Garantías' checked={garantias} onChange={(e) => { setGarantias(e.value); setInversion(null); setAprobacion(null) }} />
            <ToggleButton onIcon='pi pi-file-check' offIcon='pi pi-file-check' onLabel='Aprobación' offLabel='Aprobación' checked={aprobacion} onChange={(e) => { setAprobacion(e.value); setInversion(null); setGarantias(null) }} />
          </div>
          <div className='flex justify-content-between align-items-center w-full div-pds mt-4 font-light text-xs'>
            <Button className='show-detail' label="Mostrar detalles de cliente" rounded />
          </div>
        </Card>
      </div>
    </main>
  );
}
