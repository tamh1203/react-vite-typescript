import ModalAddUser from './ModalAddUser';
import { useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import TableListUser from './TableListUser';

const ManageUser: React.FC = () => {
  const [showCreatUser, setShowCreatUser] = useState<boolean>(false);

  return (
    <div className="manage-container">
      <div className="title-heading">Manage User</div>
      <div className="users-content">
        <div className="btn-create-account">
          <button onClick={() => setShowCreatUser(true)}>
            <FcPlus /> Create Account
          </button>
        </div>
        <div>
          <ModalAddUser show={showCreatUser} setShow={setShowCreatUser} />
          <TableListUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
