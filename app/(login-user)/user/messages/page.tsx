import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from '../profil/ui/UserProfile';
import NavProfil from '../profil/ui/NavProfil';
import { Card, CardContent } from '@/components/ui/card';

const Page = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout>
      <NavProfil actif="messages" />
      <div className="mt-4">
        <div className="container ">
          <Card>
            <CardContent>
              <div className="bg-background">
                <div className="flex flex-auto mb-10">
                  <div className="w-80 border-t  border-s border-b h-[50rem]  py-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                    sint molestiae voluptates beatae provident, earum nisi
                    doloribus dolorem autem necessitatibus obcaecati asperiores
                    magnam. Tempora magnam reprehenderit deleniti beatae harum
                    praesentium!
                  </div>
                  <div className="w-full p-4 border-l border-t h-[50rem] border-b border-e">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est cupiditate at laborum earum, in iure accusamus
                    fugiat pariatur rerum debitis! Neque ut nemo repellendus ex
                    recusandae unde a voluptate illum facere sapiente doloremque
                    consectetur adipisci dicta ratione veniam enim, modi illo
                    nisi voluptatum culpa dolores, provident, ducimus officiis?
                    Culpa praesentium corrupti soluta, iusto doloremque,
                    voluptatibus sed repellat illo placeat rerum numquam ab
                    aliquid libero. Minus neque delectus fuga repellat beatae
                    qui quae eveniet, necessitatibus culpa dolor veniam, numquam
                    accusantium doloremque facilis vitae perferendis aut cumque
                    aspernatur! Magnam, ipsa provident aliquam eum hic maiores
                    magni libero totam ex perspiciatis. Nostrum corporis ad
                    minima nemo placeat magnam reprehenderit rerum, incidunt
                    ullam recusandae accusantium neque reiciendis labore. Hic
                    necessitatibus, id consectetur, ab labore esse error magni
                    culpa et illum laborum numquam sed sint dolore minus odio,
                    repudiandae autem eos. Magni incidunt doloremque minus rerum
                    ea beatae ex quo in omnis ab debitis aperiam cum labore,
                    odit voluptatum obcaecati veniam. Quis neque, fugiat porro
                    esse eaque, blanditiis officiis rem eligendi consequuntur
                    cumque dicta tenetur iusto quia ipsum placeat. Consequuntur
                    quam nostrum culpa accusamus ipsam rem consequatur,
                    assumenda velit dolorum quas non earum, fugit praesentium
                    eaque odit dignissimos possimus excepturi architecto facilis
                    doloremque. Maxime!
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;

export const metadata: Metadata = {
  title: 'Messages',
};
