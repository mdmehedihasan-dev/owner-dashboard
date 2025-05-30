import React, { useState } from 'react';
import { Input, Modal, Pagination } from 'antd';
import { MdOutlineCancelPresentation } from 'react-icons/md';

const { Search } = Input;

const users = [
  {
    id: '#1233',
    fullName: 'Nurulla Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Sujon Khan',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Babar khan',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Jack Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Lyes ',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Alex Hales',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Robin khan',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Hasain Hayder',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Mohid Mia',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Emran Mahamud',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Kumar Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Symon Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Jack Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Nick Less',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Yashraj Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Kathryn Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '#1233',
    fullName: 'Kathryn Murp',
    guest: '4',
    date: '22/02/2025',
    time:'10:12 AM',
    status:'VIP',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const BookingManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // filter for search 
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); 
  };

  
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const showDeleteConfirm = (user) => {
    setUserToDelete(user);
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setUserToDelete(null);
  };
  const handleDelete = () => {
    console.log('Deleting user:', userToDelete);
    setIsModalVisible(false);
    setUserToDelete(null);
  };

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Booking Management</h2>
        <div className="w-[348px]">
          <Search
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search here..."
            onSearch={handleSearch}
            className="p-2 rounded"
          />
        </div>
      </div>
      <div className="bg-[#f6f6f6] rounded-lg shadow p-3">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID no.</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Guest</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((user) => (
                <tr key={user.id}>
                  <td className="py-4 px-4">{user.id}</td>
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-md mr-2"
                    />
                    {user.fullName}
                  </td>
                  <td className="py-2 px-4">{user.guest}</td>
                  <td className="py-2 px-4">{user.date}</td>
                  <td className="py-2 px-4">{user.time}</td>
                  <td className="py-2 px-4">{user.status}</td>
                  <td className="py-4 flex gap-x-2 px-4">
                    <button
                      className="bg-red-500  hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
                      onClick={() => showDeleteConfirm(user)}
                    >
                      <MdOutlineCancelPresentation/>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {pageSize * (currentPage - 1) + 1} -{' '}
            {Math.min(pageSize * currentPage, filteredUsers.length)} out of{' '}
            {filteredUsers.length}
          </p>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredUsers.length}
            onChange={handlePageChange}
            showSizeChanger={false} 
            showQuickJumper
            // showTotal={(total) => `Showing out of  ${total} `}
          />
        </div>
      </div>


      <Modal
        title="Are you sure you want to Cancel?"
        visible={isModalVisible}
        onOk={handleDelete}
        okButtonProps={{
          className: '!bg-red-500 !text-white', 
        }}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: { display: 'none' }, 
        }}
        okText="Cancel"
       
      >
      </Modal>

    
    </div>
  );
};

export default BookingManagement;
