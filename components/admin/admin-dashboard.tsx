"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { Settings, Users, ImageIcon, FileText, Mail, BarChart3, Shield, Plus, Edit, Trash2, Eye } from "lucide-react"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
  const [isAnnouncementDialogOpen, setIsAnnouncementDialogOpen] = useState(false)
  const [isFacultyDialogOpen, setIsFacultyDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [cloudinaryUsage, setCloudinaryUsage] = useState<null | { used: number; max: number; free: number }>(null)

  useEffect(() => {
    fetch("/api/cloudinary-usage")
      .then((res) => res.json())
      .then((data) => setCloudinaryUsage(data))
      .catch(() => setCloudinaryUsage(null))
  }, [])

  const handleCreateEvent = () => {
    console.log("[v0] Create event button clicked")
    setIsEventDialogOpen(true)
  }

  const handleCreateAnnouncement = () => {
    console.log("[v0] Create announcement button clicked")
    setIsAnnouncementDialogOpen(true)
  }

  const handleManageFaculty = () => {
    console.log("[v0] Manage faculty button clicked")
    setIsFacultyDialogOpen(true)
  }

  const handleUploadImages = () => {
    console.log("[v0] Upload images button clicked")
    toast({
      title: "Image Upload",
      description: "Image upload functionality activated. Files can now be selected and uploaded.",
    })
  }

  const handleViewContent = (contentTitle: string) => {
    console.log(`[v0] View content: ${contentTitle}`)
    toast({
      title: "Content Viewer",
      description: `Opening ${contentTitle} in preview mode.`,
    })
  }

  const handleEditContent = (contentTitle: string) => {
    console.log(`[v0] Edit content: ${contentTitle}`)
    setEditingItem({ type: "content", title: contentTitle })
    setIsEditDialogOpen(true)
  }

  const handleEditEvent = (eventTitle: string) => {
    console.log(`[v0] Edit event: ${eventTitle}`)
    setEditingItem({ type: "event", title: eventTitle })
    setIsEditDialogOpen(true)
  }

  const handleDeleteEvent = (eventTitle: string) => {
    console.log(`[v0] Delete event: ${eventTitle}`)
    toast({
      title: "Event Deleted",
      description: `${eventTitle} has been successfully deleted.`,
      variant: "destructive",
    })
  }

  const handleViewGalleryImage = (imageIndex: number) => {
    console.log(`[v0] View gallery image: ${imageIndex}`)
    toast({
      title: "Image Viewer",
      description: `Opening image ${imageIndex + 1} in full view.`,
    })
  }

  const handleEditGalleryImage = (imageIndex: number) => {
    console.log(`[v0] Edit gallery image: ${imageIndex}`)
    setEditingItem({ type: "image", index: imageIndex })
    setIsEditDialogOpen(true)
  }

  const handleDeleteGalleryImage = (imageIndex: number) => {
    console.log(`[v0] Delete gallery image: ${imageIndex}`)
    toast({
      title: "Image Deleted",
      description: `Image ${imageIndex + 1} has been successfully deleted from the gallery.`,
      variant: "destructive",
    })
  }

  const handleEditFaculty = (facultyName: string) => {
    console.log(`[v0] Edit faculty: ${facultyName}`)
    setEditingItem({ type: "faculty", name: facultyName })
    setIsEditDialogOpen(true)
  }

  const handleReviewApplication = (applicantName: string) => {
    console.log(`[v0] Review application: ${applicantName}`)
    toast({
      title: "Application Review",
      description: `Opening ${applicantName}'s application for detailed review.`,
    })
  }

  const handleSaveSettings = () => {
    console.log("[v0] Save settings clicked")
    toast({
      title: "Settings Saved",
      description: "All settings have been successfully updated.",
    })
  }

  const handleUpdateSecurity = () => {
    console.log("[v0] Update security clicked")
    toast({
      title: "Security Updated",
      description: "Security settings have been successfully updated.",
    })
  }

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Event form submitted")
    toast({
      title: "Event Created",
      description: "Your event has been successfully created and published.",
    })
    setIsEventDialogOpen(false)
  }

  const handleSubmitAnnouncement = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Announcement form submitted")
    toast({
      title: "Announcement Posted",
      description: "Your announcement has been successfully posted to the website.",
    })
    setIsAnnouncementDialogOpen(false)
  }

  const handleSubmitFaculty = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Faculty form submitted")
    toast({
      title: "Faculty Added",
      description: "New faculty member has been successfully added to the directory.",
    })
    setIsFacultyDialogOpen(false)
  }

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`[v0] Edit form submitted for: ${editingItem?.title || editingItem?.name || "item"}`)
    toast({
      title: "Changes Saved",
      description: `${editingItem?.title || editingItem?.name || "Item"} has been successfully updated.`,
    })
    setIsEditDialogOpen(false)
    setEditingItem(null)
  }

  const stats = [
    { label: "Total Students", value: "1,247", change: "+12", icon: Users },
    { label: "Faculty Members", value: "45", change: "+2", icon: Users },
    { label: "Gallery Images", value: "156", change: "+24", icon: ImageIcon },
  ]

  const recentActivities = [
    { action: "New admission application", user: "Sarah Johnson", time: "2 hours ago" },
    { action: "Gallery image uploaded", user: "Emily Rodriguez", time: "6 hours ago" },
    { action: "Faculty profile updated", user: "David Thompson", time: "1 day ago" },
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Cloudinary Storage Usage */}
        {cloudinaryUsage && (
          <div className="mb-4 p-4 rounded bg-blue-50 border border-blue-200 flex items-center gap-4">
            <span className="font-semibold text-blue-900">Cloudinary Storage:</span>
            <span className="text-blue-800">
              {((cloudinaryUsage.used / (1024*1024)).toFixed(2))} MB used /
              {(cloudinaryUsage.max / (1024*1024*1024)).toFixed(0)} GB free tier
              ({((cloudinaryUsage.used / cloudinaryUsage.max) * 100).toFixed(1)}% used)
            </span>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your school's content and settings</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                System Online
              </Badge>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-green-600 text-sm">{stat.change} this month</p>
                      </div>
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-accent" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium text-sm">{activity.action}</p>
                          <p className="text-muted-foreground text-xs">by {activity.user}</p>
                        </div>
                        <p className="text-muted-foreground text-xs">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-accent" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" onClick={handleCreateEvent}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Event
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={handleUploadImages}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Upload Gallery Images
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={handleCreateAnnouncement}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Create Announcement
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={handleManageFaculty}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Manage Faculty
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Homepage Hero", status: "Published", lastUpdated: "2 days ago" },
                    { title: "About Us Page", status: "Published", lastUpdated: "1 week ago" },
                    { title: "Academic Programs", status: "Draft", lastUpdated: "3 days ago" },
                    { title: "Mission Statement", status: "Published", lastUpdated: "2 weeks ago" },
                    { title: "Contact Information", status: "Published", lastUpdated: "1 day ago" },
                    { title: "School Policies", status: "Review", lastUpdated: "5 days ago" },
                  ].map((content, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant={content.status === "Published" ? "default" : "secondary"}
                            className={content.status === "Draft" ? "bg-yellow-100 text-yellow-800" : ""}
                          >
                            {content.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{content.lastUpdated}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-transparent"
                            onClick={() => handleViewContent(content.title)}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-transparent"
                            onClick={() => handleEditContent(content.title)}
                          >
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Gallery Management</span>
                  <Button onClick={handleUploadImages}>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                          src={`/ceholder-svg-key-2scob-height-200-width-200-text-i.jpg?key=2scob&height=200&width=200&text=Image+${index + 1}`}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" onClick={() => handleViewGalleryImage(index)}>
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="secondary" onClick={() => handleEditGalleryImage(index)}>
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteGalleryImage(index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Faculty Management</span>
                  <Button onClick={handleManageFaculty}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Faculty
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Dr. Sarah Johnson", role: "Principal", department: "Administration", status: "Active" },
                    {
                      name: "Prof. Michael Chen",
                      role: "Head of Mathematics",
                      department: "Mathematics",
                      status: "Active",
                    },
                    {
                      name: "Dr. Emily Rodriguez",
                      role: "English Department Chair",
                      department: "English",
                      status: "Active",
                    },
                    {
                      name: "Mr. David Thompson",
                      role: "Science Department Head",
                      department: "Science",
                      status: "Active",
                    },
                  ].map((faculty, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{faculty.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {faculty.role} • {faculty.department}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {faculty.status}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent"
                          onClick={() => handleEditFaculty(faculty.name)}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Emma Wilson", grade: "Grade 9", submitted: "2024-03-10", status: "Under Review" },
                    { name: "James Martinez", grade: "Grade 7", submitted: "2024-03-08", status: "Approved" },
                    { name: "Sophia Chen", grade: "Grade 11", submitted: "2024-03-05", status: "Interview Scheduled" },
                    { name: "Lucas Thompson", grade: "Grade 6", submitted: "2024-03-03", status: "Pending Documents" },
                  ].map((application, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{application.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {application.grade} • Submitted {application.submitted}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={
                            application.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : application.status === "Under Review"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }
                        >
                          {application.status}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent"
                          onClick={() => handleReviewApplication(application.name)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-accent" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="school-name">School Name</Label>
                    <Input id="school-name" defaultValue="Pinnacle Academy" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      defaultValue="info@pinnacleacademy.edu"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-number">Phone Number</Label>
                    <Input type="tel" defaultValue="(555) 123-4567" className="w-full p-2 border rounded-md" />
                  </div>
                  <Button className="w-full" onClick={handleSaveSettings}>
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-accent" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <Input type="password" placeholder="••••••••" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Two-Factor Authentication</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Enabled
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" onClick={handleUpdateSecurity}>
                    Update Security
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Announcement Creation Dialog */}
        <Dialog open={isAnnouncementDialogOpen} onOpenChange={setIsAnnouncementDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Announcement</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmitAnnouncement} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="announcement-title">Announcement Title</Label>
                <Input id="announcement-title" placeholder="Enter announcement title" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="announcement-content">Content</Label>
                <Textarea id="announcement-content" placeholder="Enter announcement content" rows={4} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="announcement-priority">Priority</Label>
                <select id="announcement-priority" className="w-full p-2 border rounded-md">
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsAnnouncementDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Post Announcement</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Faculty Creation Dialog */}
        <Dialog open={isFacultyDialogOpen} onOpenChange={setIsFacultyDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Faculty Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmitFaculty} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="faculty-name">Full Name</Label>
                <Input id="faculty-name" placeholder="Enter full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faculty-role">Role/Position</Label>
                <Input id="faculty-role" placeholder="Enter role or position" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faculty-department">Department</Label>
                <select id="faculty-department" className="w-full p-2 border rounded-md" required>
                  <option value="">Select Department</option>
                  <option value="administration">Administration</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="english">English</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="arts">Arts</option>
                  <option value="physical-education">Physical Education</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="faculty-email">Email</Label>
                <Input id="faculty-email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faculty-bio">Bio</Label>
                <Textarea id="faculty-bio" placeholder="Enter brief biography" rows={3} />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsFacultyDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Faculty</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Edit{" "}
                {editingItem?.type === "content"
                  ? "Content"
                  : editingItem?.type === "event"
                    ? "Event"
                    : editingItem?.type === "faculty"
                      ? "Faculty"
                      : "Item"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmitEdit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">{editingItem?.type === "faculty" ? "Name" : "Title"}</Label>
                <Input
                  id="edit-title"
                  defaultValue={editingItem?.title || editingItem?.name || ""}
                  placeholder={`Enter ${editingItem?.type === "faculty" ? "name" : "title"}`}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-content">
                  {editingItem?.type === "event" ? "Description" : editingItem?.type === "faculty" ? "Bio" : "Content"}
                </Label>
                <Textarea
                  id="edit-content"
                  placeholder={`Enter ${
                    editingItem?.type === "event"
                      ? "description"
                      : editingItem?.type === "faculty"
                        ? "biography"
                        : "content"
                  }`}
                  rows={4}
                />
              </div>
              {editingItem?.type === "event" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="edit-date">Date</Label>
                    <Input id="edit-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-location">Location</Label>
                    <Input id="edit-location" placeholder="Enter location" />
                  </div>
                </>
              )}
              {editingItem?.type === "faculty" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="edit-role">Role</Label>
                    <Input id="edit-role" placeholder="Enter role" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-department">Department</Label>
                    <select id="edit-department" className="w-full p-2 border rounded-md">
                      <option value="">Select Department</option>
                      <option value="administration">Administration</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                      <option value="arts">Arts</option>
                      <option value="physical-education">Physical Education</option>
                    </select>
                  </div>
                </>
              )}
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
