import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    background-color: #fff;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    color: #555555;
`

export const UserAvatar = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #F5F5F5;
    padding: 8px 6px;
    font-weight: bold;
    height: 32px;
    width: 32px;
`

export const UserName = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`