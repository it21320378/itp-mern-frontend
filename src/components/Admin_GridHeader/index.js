import { useState } from "react"
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  useMantineTheme,
  createStyles,
  Image
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  IconLogout,
  IconSettings,
  IconTrash,
  IconChevronDown,
  IconAlignJustified
} from "@tabler/icons-react"
import { LandingPageGrid } from "../../pages/LandingPageGrid"
import { ManageFAQ } from "../ManageFAQ"
import { ReceivedTicketsTableForReportGeneration } from "../GenerateReport"
import Logo from "../../assets/logo1.png"

// Custom Theme
const useStyles = createStyles(theme => ({
  header: {
    paddingTop: theme.spacing.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#ffbb38",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`
    // marginBottom: 120,
  },

  mainSection: {
    paddingBottom: 20
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
    paddingBlock: "10px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.yellow[2]
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none"
    }
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none"
    }
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.yellow[2]
  },

}))

///css----------------------------------
const user = {
  name: "Admin V.S. Gunasekara",
  email: "it21320378@my.sliit.lk",
  image:
    "https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
}
// const tabs = [
//   { tab: "Management Systems", icon: <IconAlignJustified size={10} /> },
//   { tab: "Manage FAQ's", icon: null },
//   { tab: "Generate Reports", icon: null }
//   // { tab: "Backup All Tickets", icon: null },
// ]

const AdminDashboardHeader = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()
  const [opened, { toggle }] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)


  return (
    <>
      <div className={classes.header}>
        <Container className={classes.mainSection}>
          <Group position="apart">
            {/* dashboard logo */}
            <Image src={Logo} width={50} ml={50} />

            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
            <Menu
              width={260}
              position="bottom-end"
              //   transition="pop-top-right"
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, {
                    [classes.userActive]: userMenuOpened
                  })}
                >
                  <Group spacing={7}>
                    {/* profile picture */}
                    <Avatar
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={20}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user.name}
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Administrator</Menu.Label>
                <Menu.Divider />
                <Menu.Label>Change Theme</Menu.Label>

                <Menu.Divider />
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
                  <a
                    href="/"
                    style={{
                      color: "inherit",
                      textDecoration: "inherit"
                    }}
                  >
                    Logout
                  </a>
                </Menu.Item>                
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Container>
      </div>
      
    </>
  )
}

export default AdminDashboardHeader
