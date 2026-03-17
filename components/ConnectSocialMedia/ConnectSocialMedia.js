"use client";
import {
  useConnectFacebookMutation,
  useConnectInstagramMutation,
  useConnectTiktokMutation,
  useConnectYoutubeMutation,
  useGetListOfAccountsQuery,
} from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { MultiplicationSignIcon } from "hugeicons-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  FacebookButton,
  InstagramButton,
  TiktokButton,
  YoutubeButton,
} from "../Buttons/SocialButtons";
import ModalforListOfAccount from "../CustomModal/ModalforListOfAccount";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const ConnectSocialMedia = () => {
  const [open, setOpen] = useState(false);
  const params = useSearchParams()
  const error = params.get("error")
  // console.log(error);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [connectYoutube, { isLoading }] = useConnectYoutubeMutation();
  const {data: listOfAccounts, isLoading: isLoadingListOfAccounts} = useGetListOfAccountsQuery()
  // console.log(listOfAccounts);
  const [connectFacebook, { isLoading: isLoadingFacebook }] =
    useConnectFacebookMutation();
  const [connectInstagram, {isLoading: isLoadingInstagram}] = useConnectInstagramMutation()
  const [connectTiktok, {isLoading: isLoadingTiktok}] = useConnectTiktokMutation()

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleYoutube = async () => {
    try {
      const response = await connectYoutube({});
      // console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to Youtube");
    } 
  };
  const handleFacebook = async () => {
    try {
      const response = await connectFacebook({});
      console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to Facebook");
    }
  };
  const handleInstagram = async () => {
    try {
      const response = await connectInstagram({});
      // console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to Instagram");
    }
  };
  const handleTiktok = async () => {
    try {
      const response = await connectTiktok({});
      console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to Tiktok");
    }
  };
  
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-neutral-900 text-center">
        Connect Your Social Accounts
      </h2>
      <p className="text-sm text-neutral-600 mt-1 text-center ">
        Build trust with your network by connecting your social profiles
      </p>
      <div className="flex flex-col gap-6 mt-8 mb-5 max-w-[500px] mx-auto">
        {/* facebook accounts  */}
        <div className="flex items-center justify-between gap-3">
          <FacebookButton
            handleFacebook={handleFacebook}
            className={"cursor-pointer"}
          />
          {/* accounts  */}
          <div className="flex items-center gap-1">
            {
              listOfAccounts?.data?.facebook?.slice(0, 4)?.map((account, i) => (
                <CustomTooltip key={i} message={account?.title}>
                <div className=" object-cover relative cursor-pointer group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                  <Image src={account?.image } alt="facebook" width={40} height={40} className="object-cover" />
                </div>
                 {/* cross icon  */}
                  <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-200 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                  <MultiplicationSignIcon className={"z-20"} size={14} strokeWidth={2} />
                </div>
              </div>
                </CustomTooltip>              
              ))
            }   
            {
              listOfAccounts?.data?.facebook?.length > 4 && (
                <div onClick={() => {
                  setOpen(true)
                  setSelectedAccounts(listOfAccounts?.data?.facebook)
                  }} className="text-xs text-neutral-600 h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  +{listOfAccounts?.data?.facebook?.length - 4}
                </div>
              )
            }        
          </div>
        </div>
        {/* youtube accounts  */}
        <div className="flex items-center justify-between gap-2 ">
          <YoutubeButton
            handleYoutube={handleYoutube}
            className={"cursor-pointer"}
          />
          <div className="flex items-center gap-1">
            {
              listOfAccounts?.data?.youtube?.slice(0, 4)?.map((account, i) => (
                <CustomTooltip key={i} message={account?.title}>
                <div className=" object-cover relative cursor-pointer group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                    <Image src={account?.image } alt="youtube" width={40} height={40} className="object-cover" />
                  </div>
                  {/* cross icon  */}
                  <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-200 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                    <MultiplicationSignIcon className={"z-20"} size={14} strokeWidth={2} />
                  </div>
                </div>
                </CustomTooltip>
              ))
            }
            {
              listOfAccounts?.data?.youtube?.length > 4 && (
                <div onClick={() => {
                  setOpen(true)
                  setSelectedAccounts(listOfAccounts?.data?.youtube)
                }} className="text-xs text-neutral-600 h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  +{listOfAccounts?.data?.youtube?.length - 4}
                </div>
              )
            }
          </div>
        </div>
        {/* instagram accounts  */}
        <div className="flex items-center justify-between gap-3">
          <InstagramButton handleInstagram={handleInstagram} className={"cursor-pointer"} />
          <div className="flex items-center gap-2">
            {
              listOfAccounts?.data?.instagram?.slice(0, 4)?.map((account, i) => (
                <CustomTooltip key={i} message={account?.title}>
                <div className=" object-cover relative cursor-pointer group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                    <Image src={account?.image } alt="instagram" width={40} height={40} className="object-cover" />
                  </div>
                  {/* cross icon  */}
                  <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-200 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                    <MultiplicationSignIcon className={"z-20"} size={14} strokeWidth={2} />
                  </div>
                </div>
                </CustomTooltip>
              ))
            }
            {
              listOfAccounts?.data?.instagram?.length > 4 && (
                <div onClick={() => {
                  setOpen(true)
                  setSelectedAccounts(listOfAccounts?.data?.instagram)
                }} className="text-xs text-neutral-600 h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  +{listOfAccounts?.data?.instagram?.length - 4}
                </div>
              )
            }
          </div>
        </div>
        {/* tiktok accounts  */}
        <div className="flex items-center justify-between">
          <TiktokButton handleTiktok={handleTiktok} className={"cursor-pointer"}/>
          <div className="flex items-center gap-2">
            {listOfAccounts?.data?.tiktok?.slice(0, 4)?.map((account, i) => (
              <CustomTooltip key={i} message={account?.title}>
                <div className=" object-cover relative cursor-pointer group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                    <Image src={account?.image } alt="tiktok" width={40} height={40} className="object-cover" />
                  </div>
                </div>
              </CustomTooltip>
            ))}
            {
              listOfAccounts?.data?.tiktok?.length > 4 && (
                <div onClick={() => {
                  setOpen(true)
                  setSelectedAccounts(listOfAccounts?.data?.tiktok)
                }} className="text-xs text-neutral-600 h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  +{listOfAccounts?.data?.tiktok?.length - 4}
                </div>
              )
            }
          </div>
        </div>
      </div>
      <ModalforListOfAccount open={open} setOpen={setOpen} data={selectedAccounts} />
    </div>
  );
};

export default ConnectSocialMedia;
