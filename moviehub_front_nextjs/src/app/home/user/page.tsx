import styles from '../home.module.css'
import '../../../components/commentsContainer/comments.styles.css'
import Link from 'next/link';
import { notFound } from 'next/navigation'

import { FaArrowRight } from 'react-icons/fa';

import { useUserContext } from '@/context/userContext';


const UserPage = () => {


  // if (!user) {
  //   notFound()
  // }

    return (
    <>
       <h1>User page</h1>
       <Link className='addCommentButton' href={'user/newMovie'} >
                <FaArrowRight className="icon" />
                <p className="text"> CreateMovie </p>
            </Link>
    </>
 
    )
  }
  
  export default UserPage
   