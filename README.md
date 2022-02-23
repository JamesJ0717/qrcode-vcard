This is essentially the easiest way I could think of to run an api without needing to setup a VPS. Using vercel to host makes this a breeze.

The purpose of this site is to host an api that returns a contact card. I wanted to use a QR code to be able to share my information quickly, but the majority of the services out there made no sense to pay for. Being an engineer, I decided I would build my own method of sharing. 

I found this package that would generate a `vCard`, the standard for contact cards on phones, and learned how to use it, it's fairly straightforward. Then I took advantage of Next.js's ability to run an api without needing to setup a server to run the code, in this case Typescript. All in all, this was much easier than I thought, and I am glad I didn't pay a service to do it for me.

[link](https://qr.jamesjohnson.io/api/qr)

