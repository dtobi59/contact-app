import React from "react";
import userImage from "../images/user.png";
import {Link} from "react-router-dom";
const ContactCard = (props) =>{
    const {id,name,email,created_at} = props.contact;
  return (
     
      <tr key={id}>
          
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to= {`contact/${id}`} state = {{contact: props.contact}}>
         <p className="text-gray-900 whitespace-no-wrap">
                 {id}
             </p>
             </Link>
         </td>
         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <div class="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src={userImage} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {name}
                                        </p>
                                    </div>
                                </div>
         </td>
         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             <p className="text-gray-900 whitespace-no-wrap">
             {email}
             </p>
         </td>
         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <p className="text-gray-900 whitespace-no-wrap">
             {created_at}
             </p>
         </td>
         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <div class="space-x-1 flex">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
</svg>
<svg onClick = {()=>{props.deleteHandler(id)}} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>					</div>
         </td>

      </tr>
      
  );
}

export default ContactCard;

