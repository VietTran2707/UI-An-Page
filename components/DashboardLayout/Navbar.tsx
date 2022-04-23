import React, { useEffect, useRef, useState } from 'react'
import styles from './dashboardlayout.module.scss'
import searchIcon from '../../assets/image/dashboard/searchicon.svg'
import bellIcon from '../../assets/image/dashboard/bellicon.png'
import avatar from '../../assets/image/dashboard/avatar.png'

const Navbar = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        const height = inputRef.current?.clientHeight
        console.log(height);
        if (height != null) {
            setHeight(height)
        }
    }, [])

    return (
        <div className={styles.navbar}>
            <div ref={inputRef} className={styles.input}>
                <input type='text' placeholder='search for statistics'/>
                <img src={searchIcon.src} />
            </div>
            <div className={styles.wrapper}>
                <button 
                    className={`${styles.notification} ${styles.active}`}
                    style = {{
                    width: height,
                    height: height
                    }}
                >
                    <img src={bellIcon.src} />
                </button>
                <div className={styles.admin}>
                    <div className={styles.avatar}>
                        <img 
                            src={avatar.src}
                            style = {{
                                width: height,
                                height: height
                            }}
                        />
                    </div>
                    <span>Hi, Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar