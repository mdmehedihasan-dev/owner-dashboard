import React, { useState } from 'react';
import { Table, Modal, Button, Avatar, Rate } from 'antd';
import { EyeOutlined, StopOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      key: '1',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      key: '2',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      key: '3',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      key: '4',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      key: '5',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      key: '6',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      key: '7',
      userName: 'Charlie Kristen',
      rating: 4.0,
      restaurantName: 'Ostuni',
      role: 'Customer',
      date: '12/02/23',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
  ]);

  const [reviewerDetailsModalVisible, setReviewerDetailsModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const columns = [
    {
      title: 'USER NAME',
      dataIndex: 'userName',
      key: 'userName',
      render: (text, record) => (
        <div className="flex gap-x-2 items-center">
          <Avatar src={record.avatar} className="mr-2 !rounded-md" />
          {text}
        </div>
      ),
    },
    {
      title: 'RATING',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => <Rate disabled defaultValue={rating} allowHalf count={1} />,
    },
    {
      title: 'RESTAURANT NAME',
      dataIndex: 'restaurantName',
      key: 'restaurantName',
    },
    {
      title: 'ROLE',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'ACTION',
      key: 'action',
      render: (text, record) => (
        <div className="flex space-x-2">
          <Button
           
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedReview(record);
              setReviewerDetailsModalVisible(true);
            }}
            className="!bg-red-500 !text-white border-none"
          />
          <Button
            
            icon={<StopOutlined />}
            onClick={() => {
              setSelectedReview(record);
              setBlockModalVisible(true);
            }}
            className="!bg-red-500 !text-white  border-none"
          />
        </div>
      ),
    },
  ];

  const handleReviewerDetailsModalCancel = () => {
    setReviewerDetailsModalVisible(false);
    setSelectedReview(null);
  };

  const handleBlockModalCancel = () => {
    setBlockModalVisible(false);
    setSelectedReview(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          
          <Link to={'/restaurant-details'}> <Button shape="circle" icon={<CloseOutlined />} /> </Link>
        </div>
        <p className="mb-4">All</p>
        <Table columns={columns} dataSource={reviews} pagination={false} />

        {/* Reviewer Details Modal */}
        <Modal
          title="Reviewer Details"
          visible={reviewerDetailsModalVisible}
          onCancel={handleReviewerDetailsModalCancel}
          footer={null}
        >
          {selectedReview && (
            <div className="flex flex-col items-center">
              <Avatar src={selectedReview.avatar} size={80} className="mb-4" />
              <p className="font-semibold">{selectedReview.userName}</p>
              <p>Rating: {selectedReview.rating}</p>
              <p>Restaurant: {selectedReview.restaurantName}</p>
              <p>Role: {selectedReview.role}</p>
              <p>Date: {selectedReview.date}</p>
            </div>
          )}
        </Modal>

        {/* Block Modal */}
        <Modal
          
          visible={blockModalVisible}
          onCancel={handleBlockModalCancel}
          footer={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Button key="block" type="primary" danger style={{ marginBottom: '8px' }}>
                Block
              </Button>
              <Button key="cancel" className='!bg-black !text-white' onClick={handleBlockModalCancel}>
                Unblock
              </Button>
            </div>
          }
        >
          {selectedReview && (
            <p className='text-center font-semibold'>Are you sure you want to block {selectedReview.userName}?</p>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Reviews;