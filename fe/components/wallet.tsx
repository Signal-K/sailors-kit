import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";

export function Wallet() {
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);

  const handleWithdrawSubmit = () => {
    setIsWithdrawDialogOpen(false);
    setIsMessageDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-8 p-6 sm:p-8 md:p-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">My Wallet</div>
          <Button size="icon" variant="ghost">
            <SettingsIcon className="h-5 w-5" />
          </Button>
        </div>
        <Card className="flex flex-col gap-4 p-6 shadow-neumorphic-light dark:shadow-neumorphic-dark">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium">$350.00</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Available Balance</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowUpIcon className="h-5 w-5 text-green-500" />
              <div className="text-sm text-green-500">+$210.00</div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Contributions Value (Last 30 days)</div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Recent Rewards</div>
          <Button size="icon" variant="ghost">
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="grid gap-4">
          <Card className="flex items-center justify-between p-4 shadow-neumorphic-light dark:shadow-neumorphic-dark">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400">
                <ArrowUpIcon className="h-5 w-5" />
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">NASA / Exoplanet-Hunters</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">June 15, 2024</div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-500">+$48.10</div>
          </Card>
          <Card className="flex items-center justify-between p-4 shadow-neumorphic-light dark:shadow-neumorphic-dark">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400">
                <ArrowUpIcon className="h-5 w-5" />
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">AusCon / LorikeetWatch</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">June 10, 2024</div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-500">+$8.36</div>
          </Card>
          <Card className="flex items-center justify-between p-4 shadow-neumorphic-light dark:shadow-neumorphic-dark">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400">
                <ArrowUpIcon className="h-5 w-5" />
              </div>
              <div className="grid gap-1">
              <div className="text-sm font-medium">AusCon / LorikeetWatch</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">June 10, 2024</div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-500">+$4.69</div>
          </Card>
        </div>
      </div>
      <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Withdraw</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
            <DialogDescription>
              Enter the recipient's details and choose your preferred transfer method.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input id="recipient" placeholder="Phone number or email address" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="method">Transfer Method</Label>
              <RadioGroup className="grid grid-cols-2 gap-4" defaultValue="paypal">
                <div>
                  <RadioGroupItem className="peer sr-only" id="paypal" value="paypal" />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:-950 dark:hover:-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="paypal"
                  >
                    <ShoppingCartIcon className="mb-3 h-6 w-6" />
                    PayPal
                  </Label>
                </div>
                <div>
                  <RadioGroupItem className="peer sr-only" id="payid" value="payid" />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:-950 dark:hover:-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="payid"
                  >
                    <CheckIcon className="mb-3 h-6 w-6" />
                    PayID
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="$0.00" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit" onClick={handleWithdrawSubmit}>
              Withdraw
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Transaction Processing</DialogTitle>
            <DialogDescription>
              Transaction will take up to 48 hours to progress.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full" onClick={() => setIsMessageDialogOpen(false)}>
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
