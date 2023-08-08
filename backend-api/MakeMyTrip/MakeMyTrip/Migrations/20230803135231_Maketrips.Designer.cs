﻿// <auto-generated />
using System;
using MakeMyTrip.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MakeMyTrip.Migrations
{
    [DbContext(typeof(MakeTripContext))]
    [Migration("20230803135231_Maketrips")]
    partial class Maketrips
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MakeMyTrip.Models.AdminImageGallery", b =>
                {
                    b.Property<int>("AdminImgsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdminImgsId"));

                    b.Property<int?>("Admin_UserId")
                        .HasColumnType("int");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("LocationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Locationdescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AdminImgsId");

                    b.HasIndex("Admin_UserId");

                    b.ToTable("AdminImagecheck");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Admin_User", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("Id"));

                    b.Property<long?>("Aadharnumber")
                        .HasColumnType("bigint");

                    b.Property<string>("AgencyDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AgencyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("Phone")
                        .HasColumnType("bigint");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("RefreshTokenExpiryTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Token")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Admin_s");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Book", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookId"));

                    b.Property<int?>("Admin_UserId")
                        .HasColumnType("int");

                    b.Property<int?>("AdultCount")
                        .HasColumnType("int");

                    b.Property<int?>("ChildCount")
                        .HasColumnType("int");

                    b.Property<int?>("Id")
                        .HasColumnType("int");

                    b.Property<int?>("PackageID")
                        .HasColumnType("int");

                    b.Property<int?>("PackageOfferingPackageID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("date");

                    b.HasKey("BookId");

                    b.HasIndex("Admin_UserId");

                    b.HasIndex("PackageOfferingPackageID");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Feedback", b =>
                {
                    b.Property<int>("FeedbackId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FeedbackId"));

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GuestEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GuestName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subject")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FeedbackId");

                    b.ToTable("Feedbacks");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Hotel", b =>
                {
                    b.Property<int?>("HotelId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("HotelId"));

                    b.Property<string>("FoodType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HotelDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HotelLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HotelName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HotelRoomsAvailable")
                        .HasColumnType("int");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("PricePerPerson")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<double?>("Ratings")
                        .IsRequired()
                        .HasColumnType("float");

                    b.HasKey("HotelId");

                    b.ToTable("Hotel");
                });

            modelBuilder.Entity("MakeMyTrip.Models.PackageOffering", b =>
                {
                    b.Property<int?>("PackageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("PackageID"));

                    b.Property<int?>("Admin_UserId")
                        .HasColumnType("int");

                    b.Property<int?>("Days")
                        .HasColumnType("int");

                    b.Property<string>("Destination")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("HotelId")
                        .HasColumnType("int");

                    b.Property<int?>("Id")
                        .HasColumnType("int");

                    b.Property<string>("In_Out_India")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ItineraryDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Nights")
                        .HasColumnType("int");

                    b.Property<string>("OfferDesc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OfferType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PricePerPerson")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SpecialtyId")
                        .HasColumnType("int");

                    b.Property<int?>("Totaldays")
                        .HasColumnType("int");

                    b.Property<string>("VehicleType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PackageID");

                    b.HasIndex("Admin_UserId");

                    b.HasIndex("HotelId");

                    b.HasIndex("SpecialtyId");

                    b.ToTable("PackageOffering");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Specialty", b =>
                {
                    b.Property<int?>("SpecialtyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("SpecialtyId"));

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SpecialtyLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WhatSpecial")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SpecialtyId");

                    b.ToTable("Specialty");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Spot", b =>
                {
                    b.Property<int?>("SpotId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("SpotId"));

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("SpecialtyId")
                        .HasColumnType("int");

                    b.Property<string>("SpotLocation")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SpotId");

                    b.HasIndex("SpecialtyId");

                    b.ToTable("Spot");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Transaction", b =>
                {
                    b.Property<int?>("TranactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("TranactionId"));

                    b.Property<int?>("BookId")
                        .HasColumnType("int");

                    b.Property<bool?>("Status")
                        .HasColumnType("bit");

                    b.Property<double?>("Totalamount")
                        .HasColumnType("float");

                    b.HasKey("TranactionId");

                    b.HasIndex("BookId");

                    b.ToTable("Transaction");
                });

            modelBuilder.Entity("MakeMyTrip.Models.TravelAgent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Aadharnumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AgencyDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AgencyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("Phone")
                        .HasColumnType("bigint");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TravelAgent");
                });

            modelBuilder.Entity("MakeMyTrip.Models.AdminImageGallery", b =>
                {
                    b.HasOne("MakeMyTrip.Models.Admin_User", null)
                        .WithMany("AdminImages")
                        .HasForeignKey("Admin_UserId");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Book", b =>
                {
                    b.HasOne("MakeMyTrip.Models.Admin_User", null)
                        .WithMany("Books")
                        .HasForeignKey("Admin_UserId");

                    b.HasOne("MakeMyTrip.Models.PackageOffering", null)
                        .WithMany("Booking")
                        .HasForeignKey("PackageOfferingPackageID");
                });

            modelBuilder.Entity("MakeMyTrip.Models.PackageOffering", b =>
                {
                    b.HasOne("MakeMyTrip.Models.Admin_User", null)
                        .WithMany("Packages")
                        .HasForeignKey("Admin_UserId");

                    b.HasOne("MakeMyTrip.Models.Hotel", null)
                        .WithMany("PackageOfferings")
                        .HasForeignKey("HotelId");

                    b.HasOne("MakeMyTrip.Models.Specialty", null)
                        .WithMany("PackageOfferings")
                        .HasForeignKey("SpecialtyId");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Spot", b =>
                {
                    b.HasOne("MakeMyTrip.Models.Specialty", null)
                        .WithMany("Spots")
                        .HasForeignKey("SpecialtyId");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Transaction", b =>
                {
                    b.HasOne("MakeMyTrip.Models.Book", null)
                        .WithMany("Transactions")
                        .HasForeignKey("BookId");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Admin_User", b =>
                {
                    b.Navigation("AdminImages");

                    b.Navigation("Books");

                    b.Navigation("Packages");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Book", b =>
                {
                    b.Navigation("Transactions");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Hotel", b =>
                {
                    b.Navigation("PackageOfferings");
                });

            modelBuilder.Entity("MakeMyTrip.Models.PackageOffering", b =>
                {
                    b.Navigation("Booking");
                });

            modelBuilder.Entity("MakeMyTrip.Models.Specialty", b =>
                {
                    b.Navigation("PackageOfferings");

                    b.Navigation("Spots");
                });
#pragma warning restore 612, 618
        }
    }
}
