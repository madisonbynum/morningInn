package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class ReservedRoom {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_type_id")
	private RoomType type;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "reservation_id")
	private Reservation reservation;
	
	@Column(name="number_of_rooms")
	private int numberOfRooms;
	
//	@Column(name="room_type_id") // might not be needed
//	private int roomTypeId;
	
//	@Column(name="reservation_id") // might not be needed
//	private int reservationId;
	
	private String status;

}
