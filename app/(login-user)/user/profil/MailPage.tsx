<<<<<<< HEAD
// import { cookies } from 'next/headers';
// import Image from 'next/image';
// import { Mail } from './Mail';
// import { accounts, mails } from './Account';

// export default function MailPage() {
//   const layout = cookies().get('react-resizable-panels:layout');
//   const collapsed = cookies().get('react-resizable-panels:collapsed');

//   //   const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
//   //   const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

//   return (
//     <>
//       <div className="hidden flex-col md:flex">
//         <Mail
//           accounts={accounts}
//           mails={mails}
//           //defaultLayout={defaultLayout}
//           //   defaultCollapsed={defaultCollapsed}
//           navCollapsedSize={4}
//         />
//       </div>
//     </>
//   );
// }
=======
import { cookies } from 'next/headers';
import Image from 'next/image';
import { Mail } from './Mail';
import { accounts, mails } from './Account';

export default function MailPage() {
  const layout = cookies().get('react-resizable-panels:layout');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  //   const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  //   const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          //defaultLayout={defaultLayout}
          //   defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
