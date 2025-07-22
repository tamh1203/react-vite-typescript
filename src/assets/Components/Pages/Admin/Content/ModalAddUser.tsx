import React, { useState, type ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFileImage } from 'react-icons/fa6';
import './ManageUser.scss';
import api from '../../../../sevices/api';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

type ManageUserProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAddUser = ({ show, setShow }: ManageUserProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<string>('Admin');
  const [image, setImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const handlClose = () => {
    setShow(!show);
    setEmail('');
    setPassword('');
    setUsername('');
    setPreviewImg(null);
  };
  // xử lý upload ảnh
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImg(imageUrl);
      setImage(file);
    } else {
      setPreviewImg(null);
    }
  };
  //validate email regex
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmitUser = async () => {
    if (!validateEmail(email)) {
      toast.error('Email Invalid!');
      return;
    }
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    if (image) {
      data.append('userImage', image);
    }
    try {
      const res = await api.post('/v1/participant', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.data && res.data.EC === 0) {
        Swal.fire({
          icon: 'success',
          title: 'Thành Công',
          text: 'Tạo tài khoản thành công',
        });
      }
      handlClose();
      console.log('submit succes res', res.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Tạo tài khoản Thất bại',
      });
      console.error('submit error', error);
    }
  };
  return (
    <>
      <ToastContainer position="top-right" />
      <Modal show={show} onHide={handlClose} className="modal-create-account">
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email@gmail.com"
                value={email}
                onChange={(event) => setEmail(event?.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password Email....."
                value={password}
                onChange={(event) => setPassword(event?.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Your Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name....."
                value={username}
                onChange={(event) => setUsername(event?.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Da Nang City"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Role <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label img-upload" htmlFor="lable-upload">
                <FaFileImage />
                Upload Image
              </label>
              {/* htmlFor megre với cái id của thẻ input (id vs htmlFor giống nhau) */}
              <input
                type="file"
                id="lable-upload"
                accept="image/*"
                hidden
                onChange={(event) => handleUpload(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImg ? (
                <img src={previewImg} alt="Preview" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Agree Create Account
                </label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSubmitUser()}>
            Submit
          </Button>
          <Button variant="secondary" onClick={() => handlClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAddUser;
