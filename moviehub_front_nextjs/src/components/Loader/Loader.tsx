'use client'
import ScaleLoader from "react-spinners/ScaleLoader"
import styles from '../../app/home/home.module.css'

const Loader = () => {

    return (
        <div className={styles.customLoader}>
            <ScaleLoader
                color="#9f980e99"
                height={45}
                margin={6}
                radius={5}
                speedMultiplier={1}
                width={15}
            />
        </div>
    )
}

export default Loader