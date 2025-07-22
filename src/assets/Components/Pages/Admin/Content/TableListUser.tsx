import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import api from '../../../../sevices/api';

type ListUser = {
  id: number;
  username: string;
  email: string;
  role: string;
  image: File;
};
type ApiResponse = {
  DT: ListUser[];
  EC: number;
  EM: string;
};
const TableListUser: React.FC = () => {
  const [listUser, setListUser] = useState<ListUser[]>([]);

  useEffect(() => {
    const fetchListUser = async () => {
      try {
        const res = await api.get<ApiResponse>('v1/participant/all');
        console.log('check res list user', res.data);
        if (res.data && res.data.EC === 0) {
          setListUser(res.data.DT);
        }
      } catch (err) {
        console.error('lỗi', err);
      }
    };
    fetchListUser();
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableListUser;
