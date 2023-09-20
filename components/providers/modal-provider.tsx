"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "@/components/modal/create-server-modal";
import InviteModal from "@/components/modal/invite-modal";
import EditServerModal from "@/components/modal/edit-serve-modal";
import MemeberModal from "@/components/modal/member-modal";
import CreateChannel from "@/components/modal/create-channel-modal";
import LeaverServer from "@/components/modal/leave-server-modal";
import DeleteServer from "@/components/modal/delete-server-modal";
import DeleteChannel from "../modal/delete-channel-modal";
import EditChannel from "../modal/edit-channel-modal";
import MessageFileModal from "../modal/message-file-modal";
import DeleteMessage from "../modal/delete-message-modal";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MemeberModal />
      <CreateChannel />
      <LeaverServer />
      <DeleteServer />
      <DeleteChannel />
      <EditChannel />
      <MessageFileModal />
      <DeleteMessage />
    </>
  );
};
