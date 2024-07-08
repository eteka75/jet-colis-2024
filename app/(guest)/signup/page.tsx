import { Metadata } from 'next';
import Register from '../signin/Form/Register';
import LightLayout from '@/components/layouts/LightLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const dash = process.env.NEXT_DASHBOARD_URL || 'dashbaord';

const SignUp = async () => {
  const session = await auth();

  if (session && session?.user) {
    redirect(dash);
  }
  return (
    <LightLayout>
      <Register />
    </LightLayout>
  );
};

export default SignUp;

export const metadata: Metadata = {
  title: 'Créer un compte',
};
