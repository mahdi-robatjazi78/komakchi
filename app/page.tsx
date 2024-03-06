"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
  Tabs,
  Tab,
  Button,
  Divider,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { MyInupt } from "@/components/ui";

export default function Home() {
  const { theme, setTheme } = useTheme();
  // const theme = useThemeStore((state: any) => state.theme);

  return (
    <div className={`${theme} bg-background text-foreground p-5 w-full   `}>
      <div className="text-center flex justify-center gap-12 mb-10">
        <p className="text-red-500">صفحه خانه 1</p>
        <p className="text-red-500">صفحه خانه 2</p>
        <p className="text-red-500">صفحه خانه 3</p>
        <p className="text-red-500">صفحه خانه 4</p>
      </div>
      <div className="flex flex-row  justify-center gap-12 my-12">
        <div className="flex flex-col gap-3 w-1/4">
          <Button
            variant="ghost"
            className="border-xl w-full  border-foreground  text-foreground"
            color="primary"
            onClick={() => {
              setTheme("light");
            }}
          >
            روشن
          </Button>

          <Button
            variant="ghost"
            className="border-xl w-full border-foreground  text-foreground"
            color="primary"
            onClick={() => {
              setTheme("dark");
            }}
          >
            تاریک
          </Button>

          <Button
            variant="ghost"
            className="border-xl w-full border-foreground  text-foreground"
            color="primary"
            onClick={() => {
              setTheme("purple-dark");
            }}
          >
            بنفش
          </Button>

          <Button
            variant="ghost"
            className="border-xl w-full border-foreground  text-foreground"
            color="primary"
            onClick={() => {
              setTheme("green-dark");
            }}
          >
            سبز
          </Button>

          <Button
            variant="ghost"
            className="border-xl w-full border-foreground  text-foreground"
            color="primary"
            onClick={() => {
              setTheme("blue-dark");
            }}
          >
            آبی
          </Button>
        </div>
        <Card className="max-w-[400px] bg-primary ">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center items-center gap-12 mx-20 ">
        <div className="w-1/2">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card className="bg-primary">
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card className="bg-primary">
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card className="bg-primary">
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        <div className="w-1/2">
          <div className="my-4">
            <MyInupt
              labelPlacement="inside"
              variant="faded"
              color="primary"
              className="fill-primary-50"
              size="md"
              type="email"
              label="نام"
            />
          </div>
          <div className="my-4">
            <MyInupt
              labelPlacement="inside"
              variant="faded"
              color="primary"
              className="fill-primary-50"
              size="md"
              type="email"
              label="نام خوانوادگی"
            />
          </div>
        </div>

        <Listbox
          aria-label="Listbox Variants"
          className="bg-primary text-foreground max-w-48"
          variant={"bordered"}
        >
          <ListboxItem className="hover:bg-background" key="new">
            فایل جدید
          </ListboxItem>
          <ListboxItem className="hover:bg-background" key="copy">
            کپی لینک
          </ListboxItem>
          <ListboxItem className="hover:bg-background" key="edit">
            ویرایش فایل
          </ListboxItem>
          <ListboxItem className="hover:bg-background" key="delete">
            حذف فایل
          </ListboxItem>
        </Listbox>
      </div>

      <div></div>
    </div>
  );
}
