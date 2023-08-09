import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <SignUp
    appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: 'none',
            backgroundColor: '#FF9300',
            '&:hover, &:focus, &:active': {
              backgroundColor: '#49247A'
            }
          },
          footerActionLink: {
              color: '#FF9300'
            }
        }
      }}
    />
}