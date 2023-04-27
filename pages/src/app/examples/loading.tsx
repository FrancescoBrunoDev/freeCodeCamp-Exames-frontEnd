import { TailSpin } from 'react-loading-icons'
import {MdFrontLoader} from 'react-icons/md';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex min-h-screen flex-col items-center justify-center relative">
            <TailSpin height="3em" stroke="black" strokeWidth={3}/>
        </div>
    )
  }