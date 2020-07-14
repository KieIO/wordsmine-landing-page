import React from 'react';

import './HeaderCategoryItem.scss';

const HeaderCategoryItem = ({ target, name, isHandleClick = true}) => {
    const scrollToView = (e) => {
        if (isHandleClick) {
            e.preventDefault()
            var element = document.querySelector(`#${target}`);
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo(0, y)
            
            // active current item
            const listItem = document.getElementsByClassName("header-category-item");
            if (listItem) {
                Array.from(listItem).map((item) => {
                    const parent = item.parentNode
                    const targetAttr = item.getAttribute("href")
                    const targetName = targetAttr.substr(1, targetAttr.length)
                
                    if (targetName === target) {
                        if (Math.abs(y-window.pageYOffset) > 100) {
                            setTimeout(()=>{
                                parent.classList.add("active")
                            }, 1000)
                        }  else {
                            parent.classList.add("active")

                        }

    
                    } else {
                        parent.classList.remove("active")
                    }
                    return null;
                }
            )
            }
        }
    }
    return (
        <a className="header-category-item" href={`#${target}`} onClick={scrollToView}>
            {name}
        </a>
    );
}

export default HeaderCategoryItem;