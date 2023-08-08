using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MakeMyTrip.Migrations
{
    /// <inheritdoc />
    public partial class Maketrips : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admin_s",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<long>(type: "bigint", nullable: true),
                    AgencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgencyDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Aadharnumber = table.Column<long>(type: "bigint", nullable: true),
                    RefreshToken = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RefreshTokenExpiryTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin_s", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Feedbacks",
                columns: table => new
                {
                    FeedbackId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GuestName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GuestEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedbacks", x => x.FeedbackId);
                });

            migrationBuilder.CreateTable(
                name: "Hotel",
                columns: table => new
                {
                    HotelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ratings = table.Column<double>(type: "float", nullable: false),
                    PricePerPerson = table.Column<int>(type: "int", nullable: false),
                    HotelRoomsAvailable = table.Column<int>(type: "int", nullable: false),
                    FoodType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotel", x => x.HotelId);
                });

            migrationBuilder.CreateTable(
                name: "Specialty",
                columns: table => new
                {
                    SpecialtyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SpecialtyLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WhatSpecial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specialty", x => x.SpecialtyId);
                });

            migrationBuilder.CreateTable(
                name: "TravelAgent",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Aadharnumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<long>(type: "bigint", nullable: true),
                    AgencyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AgencyDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TravelAgent", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AdminImagecheck",
                columns: table => new
                {
                    AdminImgsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LocationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Locationdescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Admin_UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminImagecheck", x => x.AdminImgsId);
                    table.ForeignKey(
                        name: "FK_AdminImagecheck_Admin_s_Admin_UserId",
                        column: x => x.Admin_UserId,
                        principalTable: "Admin_s",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PackageOffering",
                columns: table => new
                {
                    PackageID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<int>(type: "int", nullable: true),
                    OfferType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OfferDesc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    In_Out_India = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PricePerPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Days = table.Column<int>(type: "int", nullable: true),
                    Nights = table.Column<int>(type: "int", nullable: true),
                    Totaldays = table.Column<int>(type: "int", nullable: true),
                    ItineraryDetails = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialtyId = table.Column<int>(type: "int", nullable: true),
                    HotelId = table.Column<int>(type: "int", nullable: true),
                    Admin_UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PackageOffering", x => x.PackageID);
                    table.ForeignKey(
                        name: "FK_PackageOffering_Admin_s_Admin_UserId",
                        column: x => x.Admin_UserId,
                        principalTable: "Admin_s",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PackageOffering_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "HotelId");
                    table.ForeignKey(
                        name: "FK_PackageOffering_Specialty_SpecialtyId",
                        column: x => x.SpecialtyId,
                        principalTable: "Specialty",
                        principalColumn: "SpecialtyId");
                });

            migrationBuilder.CreateTable(
                name: "Spot",
                columns: table => new
                {
                    SpotId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SpotLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialtyId = table.Column<int>(type: "int", nullable: true),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spot", x => x.SpotId);
                    table.ForeignKey(
                        name: "FK_Spot_Specialty_SpecialtyId",
                        column: x => x.SpecialtyId,
                        principalTable: "Specialty",
                        principalColumn: "SpecialtyId");
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    BookId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<int>(type: "int", nullable: true),
                    StartDate = table.Column<DateTime>(type: "date", nullable: true),
                    AdultCount = table.Column<int>(type: "int", nullable: true),
                    ChildCount = table.Column<int>(type: "int", nullable: true),
                    PackageID = table.Column<int>(type: "int", nullable: true),
                    Admin_UserId = table.Column<int>(type: "int", nullable: true),
                    PackageOfferingPackageID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.BookId);
                    table.ForeignKey(
                        name: "FK_Books_Admin_s_Admin_UserId",
                        column: x => x.Admin_UserId,
                        principalTable: "Admin_s",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Books_PackageOffering_PackageOfferingPackageID",
                        column: x => x.PackageOfferingPackageID,
                        principalTable: "PackageOffering",
                        principalColumn: "PackageID");
                });

            migrationBuilder.CreateTable(
                name: "Transaction",
                columns: table => new
                {
                    TranactionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookId = table.Column<int>(type: "int", nullable: true),
                    Totalamount = table.Column<double>(type: "float", nullable: true),
                    Status = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transaction", x => x.TranactionId);
                    table.ForeignKey(
                        name: "FK_Transaction_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "BookId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdminImagecheck_Admin_UserId",
                table: "AdminImagecheck",
                column: "Admin_UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_Admin_UserId",
                table: "Books",
                column: "Admin_UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_PackageOfferingPackageID",
                table: "Books",
                column: "PackageOfferingPackageID");

            migrationBuilder.CreateIndex(
                name: "IX_PackageOffering_Admin_UserId",
                table: "PackageOffering",
                column: "Admin_UserId");

            migrationBuilder.CreateIndex(
                name: "IX_PackageOffering_HotelId",
                table: "PackageOffering",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_PackageOffering_SpecialtyId",
                table: "PackageOffering",
                column: "SpecialtyId");

            migrationBuilder.CreateIndex(
                name: "IX_Spot_SpecialtyId",
                table: "Spot",
                column: "SpecialtyId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_BookId",
                table: "Transaction",
                column: "BookId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdminImagecheck");

            migrationBuilder.DropTable(
                name: "Feedbacks");

            migrationBuilder.DropTable(
                name: "Spot");

            migrationBuilder.DropTable(
                name: "Transaction");

            migrationBuilder.DropTable(
                name: "TravelAgent");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "PackageOffering");

            migrationBuilder.DropTable(
                name: "Admin_s");

            migrationBuilder.DropTable(
                name: "Hotel");

            migrationBuilder.DropTable(
                name: "Specialty");
        }
    }
}
