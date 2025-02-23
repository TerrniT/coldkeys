import BottomNavigation from "~/components/bottom-navigation";

export default function MainLayout(props: any) {
  return (
    <div class="flex min-h-screen flex-col gap-6 px-4 py-8 text-center ">
      {props.children}
      <BottomNavigation />
    </div>
  );
}
