import { LoadingOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disActiveLoading } from 'src/providers/loadingSlice'
import styled from 'styled-components'

const AppLoading = () => {
  const dispatch = useDispatch()
  const { active } = useSelector((state) => state?.loading)

  useEffect(() => {
    dispatch(disActiveLoading())
  }, [dispatch])

  return (
    <Wrapper className={active ? 'active' : ''}>
      <LoadingOutlined />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 999999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  svg {
    color: #ffffff;
    font-size: 28px;
  }
`

export default AppLoading
