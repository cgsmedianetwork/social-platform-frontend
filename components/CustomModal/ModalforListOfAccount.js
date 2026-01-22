"use client";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const ModalforListOfAccount = ({open, setOpen, data = []}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger></DialogTrigger> */}
        <DialogContent>
            <DialogHeader>
                <DialogTitle>List of Accounts</DialogTitle>
            </DialogHeader>
            <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
                <ul className="divide-y divide-dashed divide-slate-200">
                    {data?.map((item, index) => (
                    <li key={index} className="py-1">
                        <div className="flex items-center justify-between gap-2 w-full">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                                <Image src={item?.image } alt="facebook" width={40} height={40} className="object-cover" />
                            </div>
                            <p>{item?.title}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </DialogContent>
        </Dialog>
  )
}

export default ModalforListOfAccount