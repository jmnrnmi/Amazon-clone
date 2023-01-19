import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요, 로그인</span>
          <span className="header_optionLineTwo">계정 및 목록</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">반품</span>
          <span className="header_optionLineTwo">& 주문</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionBasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
