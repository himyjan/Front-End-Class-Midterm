/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Props } from '../types/styleComponentsType';
import { Record } from '../types/JsonServerDataType';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const columnHelper = createColumnHelper<Record>();

const columns = [
  columnHelper.accessor('name', {
    header: () => <div>Name</div>,
  }),
  columnHelper.accessor('email', {
    header: () => <div>Email</div>,
  }),
  columnHelper.accessor('message', {
    header: () => <div>Message</div>,
  }),
  columnHelper.accessor('timestamp', {
    header: () => <div>timestamp</div>,
  }),
];
function Messages({ className }: Props) {
  const [data, setData] = useState<Record[]>([]);

  const baseURL = 'http://localhost:3004/messages';

  function getJsonServerRecord() {
    axios.get(`${baseURL}`).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getJsonServerRecord();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={className}>
      <div className="container">
        <div className="title-bar">
          <button className="btn btn-primary" onClick={getJsonServerRecord}>
            Get Lists
          </button>
          <div className="" />
        </div>
        <br />

        <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="h-4" />
          {/* <button onClick={() => rerender()} className="border p-2">
            Rerender
          </button> */}
        </div>
      </div>
    </div>
  );
}
export default Messages;
