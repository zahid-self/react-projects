import React from 'react'
import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"

const Transactions = () => {
  return (
    <div class="conatiner_of_list_of_transactions">
        <ul>
            <li class="transaction income">
                <p>Earned this month</p>
                <div class="right">
                    <p>৳ 100</p>
                    <button class="link">
                        <img
                            alt='Edit'
                            class="icon"
                            src={editImg}
                        />
                    </button>
                    <button class="link">
                        <img
                            alt='Delete'
                            class="icon"
                            src={deleteImg}
                        />
                    </button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Transactions