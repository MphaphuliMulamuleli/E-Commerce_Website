import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Paper, Typography, Avatar, Container } from '@mui/material';
import ShippingPage from '../components/ShippingPage';

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <React.Fragment>
      <ProfileContainer>
        <ProfileHeader elevation={3}>
          <ProfileAvatar>
            <h1>
              {currentUser ? currentUser.name[0].toUpperCase() : ''}
            </h1>
          </ProfileAvatar>
          <ProfileName variant="h4">
            {currentUser ? currentUser.name : ''}
          </ProfileName>
          <ProfileText variant="h6">
            Email : {currentUser ? currentUser.email : ''}
          </ProfileText>
          <ProfileText variant="h6">
            Role : {currentUser ? currentUser.role : ''}
          </ProfileText>
        </ProfileHeader>
      </ProfileContainer>
    </React.Fragment>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;

`;

const ProfileHeader = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  width: 500px;
  height: 400px;
`;

const ProfileAvatar = styled(Avatar)`
  padding: 30px;
  background-color: #3f51b5;
  margin-bottom: 10px;
`;

const ProfileName = styled(Typography)`
  padding: 20px;
`;

const ProfileText = styled(Typography)`
  margin-bottom: 10px;
`;